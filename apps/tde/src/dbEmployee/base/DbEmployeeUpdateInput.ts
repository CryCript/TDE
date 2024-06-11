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
import { DbCompanyWhereUniqueInput } from "../../dbCompany/base/DbCompanyWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SbEmployeeWhereUniqueInput } from "../../sbEmployee/base/SbEmployeeWhereUniqueInput";

@InputType()
class DbEmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DbCompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DbCompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => DbCompanyWhereUniqueInput, {
    nullable: true,
  })
  companyId?: DbCompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => SbEmployeeWhereUniqueInput, {
    nullable: true,
  })
  sbEmployees?: SbEmployeeWhereUniqueInput | null;
}

export { DbEmployeeUpdateInput as DbEmployeeUpdateInput };
