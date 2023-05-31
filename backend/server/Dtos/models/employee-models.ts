import { Field, ObjectType } from 'type-graphql';

enum Status {
  active,
  inactive,
}

@ObjectType()
export class EmployeeResult {
  @Field(() => String)
  name!: string;

  @Field(() => Number)
  id!: number;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  address!: string;

  @Field(() => String)
  phone!: string;

  @Field(() => String)
  cpf!: string;

  @Field(() => String)
  birth_date!: Date;

  @Field(() => String)
  status!: Status;

  @Field(() => Number)
  branchID!: number;

  @Field(() => Number)
  departmentID!: number;

  @Field(() => Number)
  roleID!: number;

  @Field(() => String)
  image!: string;
}
