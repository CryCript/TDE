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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SbProviderWhereUniqueInput } from "../../sbProvider/base/SbProviderWhereUniqueInput";
import { SbRouteWhereUniqueInput } from "../../sbRoute/base/SbRouteWhereUniqueInput";
import { SbEmployeeListRelationFilter } from "../../sbEmployee/base/SbEmployeeListRelationFilter";
import { EnumSbVehicleVehicleType } from "./EnumSbVehicleVehicleType";

@InputType()
class SbVehicleWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  driver?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  driverPhoto?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  noPol?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  noUnit?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SbProviderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbProviderWhereUniqueInput)
  @IsOptional()
  @Field(() => SbProviderWhereUniqueInput, {
    nullable: true,
  })
  providerId?: SbProviderWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SbRouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SbRouteWhereUniqueInput)
  @IsOptional()
  @Field(() => SbRouteWhereUniqueInput, {
    nullable: true,
  })
  routeId?: SbRouteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SbEmployeeListRelationFilter)
  @IsOptional()
  @Field(() => SbEmployeeListRelationFilter, {
    nullable: true,
  })
  sbEmployee?: SbEmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SbEmployeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SbEmployeeListRelationFilter)
  @IsOptional()
  @Field(() => SbEmployeeListRelationFilter, {
    nullable: true,
  })
  sbEmployees?: SbEmployeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  vehiclePhoto?: JsonFilter;

  @ApiProperty({
    required: false,
    enum: EnumSbVehicleVehicleType,
  })
  @IsEnum(EnumSbVehicleVehicleType)
  @IsOptional()
  @Field(() => EnumSbVehicleVehicleType, {
    nullable: true,
  })
  vehicleType?: "BigBus" | "MiniBus";
}

export { SbVehicleWhereInput as SbVehicleWhereInput };
