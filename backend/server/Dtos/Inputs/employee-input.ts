import { MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

enum Status {
  active = 'active',
  inactive = 'inactive',
}

@InputType()
export class UpdateDeleteEmployeeInput {
  @Field()
  id!: number;
}

@InputType()
export class CreateUpdateEmployeeInput {
  @Field(() => String)
  @MaxLength(30)
  name!: string;

  @Field(() => Number)
  id!: number;

  @Field(() => String)
  @MaxLength(30)
  email!: string;

  @Field(() => String)
  @MaxLength(30)
  address!: string;

  @Field(() => String)
  @MaxLength(30)
  phone!: string;

  @Field(() => String)
  @MaxLength(30)
  cpf!: string;

  @Field(() => Date)
  birth_date!: Date;

  @Field(() => String)
  @MaxLength(30)
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
