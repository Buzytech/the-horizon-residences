"use client";

import Swal from "sweetalert2";

const CustomeToast = {
  success: (message: string, logo?: string) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2500,
      html: logo
        ? `<img src="${logo}" style="width:80px;height:80px;margin-bottom:15px;" /> <h2>${message}</h2>`
        : undefined,
    });
  },

  error: (message: string, logo?: string) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: message,
      showConfirmButton: false,
      timer: 2500,
      html: logo
        ? `<img src="${logo}" style="width:80px;height:80px;margin-bottom:15px;" /> <h2>${message}</h2>`
        : undefined,
    });
  },

  info: (message: string, logo?: string) => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: message,
      showConfirmButton: false,
      timer: 2500,
      html: logo
        ? `<img src="${logo}" style="width:80px;height:80px;margin-bottom:15px;" /> <h2>${message}</h2>`
        : undefined,
    });
  },
};

export default CustomeToast;
