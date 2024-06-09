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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { SbEmployeeWhereUniqueInput } from "../../sbEmployee/base/SbEmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { EnumSbOrderShift } from "./EnumSbOrderShift";

@InputType()
class SbOrderWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  date?: DateTimeNullableFilter;

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
  employeeId?: SbEmployeeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumSbOrderShift,
  })
  @IsEnum(EnumSbOrderShift)
  @IsOptional()
  @Field(() => EnumSbOrderShift, {
    nullable: true,
  })
  shift?: "Shift_1" | "Shift_2";
}

export { SbOrderWhereInput as SbOrderWhereInput };