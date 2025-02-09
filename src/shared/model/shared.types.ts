export type TErrorMessageType = {
  errorMessage?: string;
};

export type TFormProps = {
  isFormLoading: boolean;
  handleSubmitForm: () => void;
  formMethods: any;
};

export type TCardEventProps = {
  id: string;
  name: string;
  img: string;
  description?: string;
}
