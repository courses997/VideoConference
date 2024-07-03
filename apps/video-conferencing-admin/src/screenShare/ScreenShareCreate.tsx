import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const ScreenShareCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isActive" source="isActive" />
      </SimpleForm>
    </Create>
  );
};
