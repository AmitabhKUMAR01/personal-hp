'use client';
import { useEffect, useRef, useState } from 'react';
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './calculator.module.scss';
import { RiUserLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import {
  countryOptions,
  formSchema,
  FormValues,
  option,
  steps,
} from '@/constants';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      platforms: [],
      category: [],
      design: [],
      pages: [],
      authentication: [],
      security: [],
      addons: [],
      database: [],
      management: [],
      services: [],
      finalInfo: '',
      fullName: '',
      email: '',
      phone: '',
      terms: false,
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (
    field: keyof FormValues,
    value: { label: string; icon: string }
  ) => {
    const selected = watch(field) as { label: string; icon: string }[];

    const formattedValue = { label: value.label, icon: value.icon };

    if (
      field === 'platforms' ||
      field === 'authentication' ||
      field === 'addons' ||
      field === 'management' ||
      field === 'services'
    ) {
      const newValue = selected.some((item) => item.label === value.label)
        ? selected.filter((item) => item.label !== value.label)
        : [...selected, formattedValue];

      setValue(field, newValue, { shouldValidate: true });
    } else {
      setValue(field, [formattedValue], { shouldValidate: true });
    }
  };

  const nextStep = async () => {
    const currentField = steps[currentStep - 1]?.field as keyof FormValues;

    if (!currentField) return;

    const isValid = await trigger(currentField);

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* Progress Bar */}
      {currentStep < 11 && (
        <>
          {/* Mobile View - Step Indicator */}
          <div className={styles.indicator}>Step: {currentStep}/10</div>

          {/* Desktop View - Progress Bar */}
          <div className={styles.progressbar}>
            {steps.slice(0, 10).map((step, index) => (
              <div key={step.id} className={styles.steper}>
                <div
                  className={`grid h-7 w-7 place-items-center rounded-full ${
                    step.id === currentStep
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {step.id}
                </div>

                <p className={styles.name}>{step.name}</p>

                {index < 9 && <div className="h-px w-12 bg-gray-300"></div>}
              </div>
            ))}
          </div>
        </>
      )}

      <h1 className={styles.heading}>{steps[currentStep - 1].question}</h1>
      <p className={styles.subheading}>{steps[currentStep - 1].subtext}</p>

      <div className={styles.queryForm}>
        {steps[currentStep - 1].field === 'final' ? (
          <div className={styles.additional}>
            <div className={styles.firts}>
              <label className={styles.heading} htmlFor="additionalInfo">
                Still have any query ? Let us know:
              </label>
              <textarea
                id="additionalInfo"
                className={styles.desc}
                placeholder="Enter your query here..."
                rows={11}
                {...register('finalInfo')}
              />
            </div>

            <div className={styles.second}>
              <h1 className={styles.headings}>
                Please fill little info, and you’re done.
              </h1>
              <div className={styles.inputs}>
                <RiUserLine className={styles.icon} />
                <input
                  id="fullName"
                  type="text"
                  className={`${styles.shiftInput} ${errors.fullName ? 'border-b-primary' : 'border-gray-300'}`}
                  placeholder="Full Name*"
                  {...register('fullName')}
                />
              </div>

              <div className={styles.inputs}>
                <MdOutlineMailOutline className={styles.icon} />
                <input
                  id="email"
                  type="email"
                  className={`${styles.shiftInput} ${errors.email ? 'border-b-primary' : 'border-gray-300'}`}
                  placeholder="Email Address*"
                  {...register('email')}
                />
              </div>
              <div className={styles.phone}>
                <LiaPhoneVolumeSolid className={styles.icon} />

                {/* Country Code Dropdown */}
                <div className={styles.dropdownDiv} ref={dropdownRef}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      className="h-4 w-6"
                    />
                    {selectedCountry.code}
                  </button>

                  {isDropdownOpen && (
                    <div className={styles.country}>
                      {countryOptions.map((country) => (
                        <div
                          key={country.name}
                          className={styles.countrychild}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <img
                            src={country.flag}
                            alt={country.name}
                            className={styles.iamg}
                          />
                          <div className={styles.models}>
                            <p> {country.name}</p> <p>{country.code}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Phone Number Input */}
                <input
                  id="phone"
                  type="tel"
                  className={`${styles.shiftInput} ${errors.phone ? 'border-b-primary' : 'border-gray-300'}`}
                  {...register('phone')}
                />
              </div>

              <div className={styles.checkbx}>
                <input
                  id="terms"
                  type="checkbox"
                  className="h-5.000  0
                  w-5"
                  {...register('terms')}
                />
                <label htmlFor="terms" className={styles.lbl}>
                  Subscribe to our Newsletter.
                </label>
              </div>
            </div>
          </div>
        ) : (
          // Show multiple-choice options for other steps
          <div
            className={`relative grid gap-4 md:gap-8 lg:gap-8 xl:gap-12 2xl:gap-16 ${
              steps[currentStep - 1].field === 'category'
                ? 'mx-auto w-3/4 md:grid-cols-2 lg:grid-cols-3'
                : ' mx-auto grid-cols-1 md:grid-cols-2 lg:w-4/6'
            }`}
          >
            {option[steps[currentStep - 1].field as keyof FormValues]?.map(
              (item) => (
                <div
                  key={item.label}
                  onClick={() =>
                    handleSelect(
                      steps[currentStep - 1].field as keyof FormValues,
                      item
                    )
                  }
                  className={`flex cursor-pointer items-center gap-4 rounded-lg border p-6 transition-all ${
                    Array.isArray(
                      watch(steps[currentStep - 1].field as keyof FormValues)
                    ) &&
                    (
                      watch(
                        steps[currentStep - 1].field as keyof FormValues
                      ) as { label: string; icon: string }[]
                    ).some((selected) => selected.label === item.label)
                      ? 'bg-primary text-lg !font-semibold text-white'
                      : 'border-gray-200 text-lg !font-semibold text-[#222222] hover:border-red-300'
                  }`}
                >
                  <img src={item.icon} alt="" className="h-34 w-34" />
                  <span className="font-medium">{item.label}</span>
                </div>
              )
            )}

            {errors[steps[currentStep - 1].field as keyof FormValues] && (
              <p className={styles.err}>
                {
                  errors[steps[currentStep - 1].field as keyof FormValues]
                    ?.message
                }
              </p>
            )}
          </div>
        )}
      </div>

      <div className={styles.buttons}>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className={styles.prev}
          >
            <HiMiniArrowLongLeft className={styles.arr} /> Previous
          </button>
        )}
        {currentStep < steps.length ? (
          <button type="button" onClick={nextStep} className={styles.prev}>
            Next <HiMiniArrowLongRight className={styles.arr} />
          </button>
        ) : (
          <button type="submit" className={styles.submt}>
            Submit <HiMiniArrowLongRight className={styles.arr} />
          </button>
        )}
      </div>
    </form>
  );
}
