import Input, {
  isValidPhoneNumber,
  getCountries,
  getCountryCallingCode
} from "react-phone-number-input/input";

import "react-phone-number-input/style.css";

// import PhoneInput from "react-phone-number-input";
import en from "react-phone-number-input/locale/en.json";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  const [country, setCountry] = useState("IN");

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className="max-w-xl mx-auto flex items-center justify-center  h-96">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col justify-center gap-9 px-4 sm:px-2">
        <div className="text-left font-semibold darkBluishGrey text-sm">
          <label htmlFor="Mobile Number">Mobile Number</label>
          <div className="flex gap-2">
            <div className="form-select flex items-center w-32 relative">
              <ReactCountryFlag
                className="w-8"
                countryCode={country}
                style={{
                  fontSize: "2em",
                  lineHeight: "2em"
                }}
                svg
              />
              <p className="Text-black pl-2">+{getCountryCallingCode(country)}</p>

              <select
                className="form-select opacity-0 absolute"
                name="countrySelect"
                value={country}
                onChange={(event) => {
                  setCountry(event.target.value || undefined);
                }}
              >
                {getCountries().map((country) => (
                  <option key={country} value={country}>
                    {en[country]} +{getCountryCallingCode(country)}
                  </option>
                ))}
              </select>
            </div>
            <Controller
              name="phone_number"
              control={control}
              rules={{
                validate: (value = "") => {
                  if (!isValidPhoneNumber(value)) return "Invalid Phone Number";                
                }
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  onChange={onChange}
                  country={country}
                  placeholder="Mobile Number"
                  className="form-input"
                  id="phone_number"
                />
              )}
            />
          </div>
          {errors["phone_number"] && (
            <p className="text-red-500 font-normal">
              {errors["phone_number"].message}
            </p>
          )}
        </div>
        <button className="w-full rounded-md text-white font-medium text-center py-3 transition bg-cyanBlue">
          Submit
        </button>
      </form>
    </div>
  );
}
