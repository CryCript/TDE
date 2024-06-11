/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { DbEmployeeCreateNestedManyWithoutDbCompaniesInput } from "./DbEmployeeCreateNestedManyWithoutDbCompaniesInput";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutDbCompaniesInput } from "./UserCreateNestedManyWithoutDbCompaniesInput";

@InputType()
class DbCompanyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  company!: string;

  @ApiProperty({
    required: false,
    type: () => DbEmployeeCreateNestedManyWithoutDbCompaniesInput,
  })
  @ValidateNested()
  @Type(() => DbEmployeeCreateNestedManyWithoutDbCompaniesInput)
  @IsOptional()
  @Field(() => DbEmployeeCreateNestedManyWithoutDbCompaniesInput, {
    nullable: true,
  })
  dbEmployees?: DbEmployeeCreateNestedManyWithoutDbCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  telp?: string | null;

  @ApiProperty({
    required: true,
    type: () => UserCreateNestedManyWithoutDbCompaniesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutDbCompaniesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutDbCompaniesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutDbCompaniesInput;
}

export { DbCompanyCreateInput as DbCompanyCreateInput };
