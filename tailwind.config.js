/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1320: "1320px",
        1140: "1140px",
        960: "960px",
        960: "960px",
        720: "720px",
        540: "540px",
      },
      width: {
        120: "120px",
        48: "48%",
      },
      height: {
        120: "120px",
      },
      screens: {
        1400: "1400px",
        1200: "1200px",
        992: "992px",
        768: "768px",
        576: "576px",
      },
      colors: {
        primary: "#F5DF4E",
        bgColor: "rgba(22, 21, 21, 0.7)",
        primaryBlack: "rgb(33, 37, 41)",
        icon: "rgb(76, 77, 77)",
        sectionBg: "#F8F9FA",
        grey: "rgb(108, 117, 125)",
        ash: "#E9ECEF",
        hoverBlack: "#424649",
        deepWhite: "#DEE3E4",
        question: "rgba(0,0,0,.4);",
      },
      fontFamily: {
        pop: "Poppins, sans-serif;",
      },
      fontSize: {
        26: "26px",
        28: "28px",
        32: "32px",
        21: "21px",
        40: "40px",
        32: "32px",
        144: "144px",
        52: "52px",
        124: "124px",
      },
      backgroundImage: {
        bannerBg: "url('./images/banner.jpg')",
        hire: "url(./images/hire.jpg)",
      },
      lineHeight: {
        1.7: "1.7",
        1.8: "1.8",
      },
      inset: {
        56: "18px",
        16: "22px",
        15: "15px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
