import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { PermissionsTitle } from "../permissions/PermissionsTitle";

export const MeetingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="duration" source="duration" />
        <ReferenceArrayInput
          source="permissionsItems"
          reference="Permissions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PermissionsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="scheduledTime" source="scheduledTime" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
