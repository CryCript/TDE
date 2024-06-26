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
import { SbEmployeeWhereInput } from "./SbEmployeeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SbEmployeeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeWhereInput)
  @IsOptional()
  @Field(() => SbEmployeeWhereInput, {
    nullable: true,
  })
  every?: SbEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeWhereInput)
  @IsOptional()
  @Field(() => SbEmployeeWhereInput, {
    nullable: true,
  })
  some?: SbEmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeWhereInput,
  })
  @ValidateNested()
  @Type(() => SbEmployeeWhereInput)
  @IsOptional()
  @Field(() => SbEmployeeWhereInput, {
    nullable: true,
  })
  none?: SbEmployeeWhereInput;
}
export { SbEmployeeListRelationFilter as SbEmployeeListRelationFilter };
