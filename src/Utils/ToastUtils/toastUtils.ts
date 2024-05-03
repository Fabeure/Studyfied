import { Bounce, toast } from "react-toastify";
import { ResultCodeEnum } from "../Enums/ResultCodeEnum";
import { BaseResponse } from "../../entities/BaseResponse";

export function showToast(response?: BaseResponse, message?: string) {
  switch (response?.resultCode) {
    case ResultCodeEnum.Success: {
      toast.success(response.userMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      break;
    }

    case ResultCodeEnum.Failed: {
      toast.error(response.userMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      break;
    }

    case ResultCodeEnum.PartialSuccess: {
      toast.info(response.userMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      break;
    }

    default: {
      toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      break;
    }
  }
}
