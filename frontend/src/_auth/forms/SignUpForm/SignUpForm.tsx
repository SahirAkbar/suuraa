// @ts-nocheck
import { useFormik } from "formik";
import { signupFormSchema } from "../../../Schema/SignupFormSchema";
import { useMutation } from "react-query";
import { signUp } from "../../../utils/https";
import { Link } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { GoogleLogo } from "../../../icons/GoogleLogo";
import { AppleLogo } from "../../../icons/AppleLogo";
import CustomImage from "../../../common/CustomImage/CustomImage";
import CustomButton from "../../../common/CustomButton/CustomButton";
import CustomInput from "../../../common/CustomInput/CustomInput";

const SignUpForm = () => {
  const { mutate } = useMutation(signUp);
  const { errors, handleSubmit, handleChange, handleBlur, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: signupFormSchema,
      onSubmit: (values) => {
        console.log(values);
        mutate(values);
        // action.resetForm();
      },
    });
  console.log(errors);
  return (
    <div className={styles.mainContainer} onSubmit={handleSubmit}>
      <div className={`relative ${styles.containerLeft}`}>
        <div className="absolute top-3 left-10 flex felx-col">
          <Link to="/">
            <div className="inline text-body-bold text-primary text-dark-8 font-OTabolas z-100">
              Suura
            </div>
          </Link>
        </div>
        <form>
          <div className="pt-14 bg-gradient-to-br to-gray-200 ">
            <div className="px-10 sm:px-16">
              <div className="grid m-10">
                <p className="font-normal text-body-caption-bold text-dark-8 font-OTabolas">
                  Welcome to Suura!
                </p>
                <p className={`mt-1 ${styles.messageText}`}>
                  Lets create an account and start enjoying Suura
                </p>
                <div className="my-6">
                  <CustomInput
                    type="text"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    id="email-input"
                  />
                  {errors.email && touched.email ? (
                    <div className="form-error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="mb-6">
                  <CustomInput
                    type="password"
                    placeholder="Password"
                    id="password-input"
                    onChange={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <div className="form-error">{errors.password}</div>
                  ) : null}
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-primary"></button>
                </div>
                <CustomButton
                  type="submit"
                  className="bg-brown-10 border-brown-10 text-white px-7 h-14 w-full"
                >
                  Create account
                </CustomButton>
                <div className="text-center mt-2 mb-2">
                  <p className={styles.messageText}>
                    By creating an account you agreed with the Suura’s
                  </p>
                  <p className={styles.messageText}>
                    terms of service & privacy guidelines
                  </p>
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-b border-gray"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-pearl-white px-4 text-md text-gray">
                        Or
                      </span>
                    </div>
                  </div>
                </div>
                <button className={styles.buttonSecondary}>
                  <div className="relative flex items-center space-x-4 justify-center">
                    <div className="absolute left-0 w-5">
                      <GoogleLogo />
                    </div>
                    <span className="block w-max tracking-wide font-TTHoves text-dark-8 text-md transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64 md:mx-auto">
                      Login with Google
                    </span>
                  </div>
                </button>
                <button className={styles.buttonSecondary}>
                  <div className="relative flex items-center space-x-4 justify-center">
                    <div className="absolute left-0 w-5">
                      <AppleLogo />
                    </div>
                    <span className="block w-max tracking-wide font-TTHoves  text-dark-8 text-md transition duration-300 group-hover:text-blue-600 sm:text-base md:w-64 md:mx-auto">
                      Login with Apple
                    </span>
                  </div>
                </button>
                <div className="text-center font-TTHoves">
                  <p className="text-dark-8 mt-4">
                    Already have an account ?&nbsp;
                    <Link
                      to={`/login`}
                      className="text-tale-10 hover:text-blue-700"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.imageContainer}>
          <CustomImage
            src="/assets/image-signup-page.jpg"
            altText="signup-display-picture"
            className="h-full w-full rounded-xl"
          />
          <div className="absolute bottom-0 p-10 text-white">
            <div className={styles.captionMessage}>
              I was glad the day I discovered Suura. As the name indicates, it
              makes the process of connecting with client for re-building shoots
              incredibly easy.
            </div>
            <div className={styles.authorContainer}>
              <CustomImage
                src="/assets/author-image.jpg"
                altText="signup-display-picture"
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-2">
                <div className="text-sm ">Danyal Saif</div>
                <div className="text-xs opacity-50">@danyalsaif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
