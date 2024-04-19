import '@testing-library/jest-dom'
import { BaseResponse } from '../../entities/BaseResponse';
import { ResultCodeEnum } from '../Enums/ResultCodeEnum';
import { showToast } from '../ToastUtils/toastUtils';
import { toast } from 'react-toastify';

// we should also manually add tests for each page to assert the toast actually shows 
// example:
// expect(await screen.findByText("alert text")).toBeInTheDocument();

test("test render a success toast", () => {
    const succesBaseResponse = new BaseResponse({resultCode: ResultCodeEnum.Success, resultItem: {}, userMessage: "success" })
    jest.spyOn(toast, 'success').mockReturnValue(0);

    showToast(succesBaseResponse);
    expect(toast.success).toHaveBeenCalled()
});

test("test render a failed toast", () => {
    const errorBaseResponse = new BaseResponse({resultCode: ResultCodeEnum.Failed, resultItem: {}, userMessage: "failed" })
    jest.spyOn(toast, 'error').mockReturnValue(0);

    showToast(errorBaseResponse);
    expect(toast.error).toHaveBeenCalled()
});

test("test render a partial success toast", () => {
    const partialSuccesBaseResponse = new BaseResponse({resultCode: ResultCodeEnum.PartialSuccess, resultItem: {}, userMessage: "partialSuccess" });
    jest.spyOn(toast, 'info').mockReturnValue(0);

    showToast(partialSuccesBaseResponse);
    expect(toast.info).toHaveBeenCalled();
});