import { useForm } from 'react-hook-form';

export const FormPrac1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onValid = (data) => {
    console.log('onValid', data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register('name', { required: '이름은 필수 항목입니다.' })} />
        {errors.name?.message}
        <br />
        <input
          type="number"
          {...register('pw', {
            required: '나이를 입력하세요',
            validate: { useZero: (v) => v >= 0 || '0이상의 숫자만 입력가능합니다.' },
          })}
        />
        {errors.pw?.message}
        <br />
        <button>제출</button>
      </form>
    </>
  );
};
