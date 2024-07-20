import "../styles/admindashboard.css";
import React from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation } from "react-query";
import { getItemsIds, submitData } from "../../services/adminService";
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const DashboardAdmin = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("submited data ", data);
    mutation.mutate(data);
  };

  // const {
  //   data: itemsData,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["getIds"],
  //   queryFn: getItemsIds,
  // });

  const mutation = useMutation(submitData, {
    onSuccess: () => {
      console.log("Data submitted successfully");
    },
  });

  // if (isLoading) {
  //   return <div>Loading</div>;
  // }

  // if (error) {
  //   return <div>Problem happened: {error.message}</div>;
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="admindash">
      <div className="inputs">
        {Array.from({ length: 6 }).map((_, index) => (
          <Controller
            key={index}
            name={`input${index}`}
            control={control}
            render={({ field }) => (
              <ReactTags
                {...field}
                tags={field.value || []}
                handleDelete={(i) => {
                  const newTags = field.value.filter((tag, idx) => idx !== i);
                  field.onChange(newTags);
                }}
                handleAddition={(tag) => {
                  const newTags = [...(field.value || []), tag];
                  field.onChange(newTags);
                }}
                delimiters={delimiters}
                inputFieldPosition="top"
                placeholder="Add new ID"
              />
            )}
          />
        ))}
      </div>
      <div className="dashbutton">
        <button type="submit" className="dash-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default DashboardAdmin;
