/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DbEmployee } from "../../dbEmployee/base/DbEmployee";
import { SbPickupPoint } from "../../sbPickupPoint/base/SbPickupPoint";
import { SbOrder } from "../../sbOrder/base/SbOrder";
import { SbVehicle } from "../../sbVehicle/base/SbVehicle";

@ObjectType()
class SbEmployee {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => DbEmployee,
  })
  @ValidateNested()
  @Type(() => DbEmployee)
  @IsOptional()
  employeeId?: DbEmployee | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => SbPickupPoint,
  })
  @ValidateNested()
  @Type(() => SbPickupPoint)
  @IsOptional()
  pickupPointId?: SbPickupPoint | null;

  @ApiProperty({
    required: false,
    type: () => [SbOrder],
  })
  @ValidateNested()
  @Type(() => SbOrder)
  @IsOptional()
  sbOrders?: Array<SbOrder>;

  @ApiProperty({
    required: false,
    type: () => SbVehicle,
  })
  @ValidateNested()
  @Type(() => SbVehicle)
  @IsOptional()
  shift_1UnitId?: SbVehicle | null;

  @ApiProperty({
    required: false,
    type: () => SbVehicle,
  })
  @ValidateNested()
  @Type(() => SbVehicle)
  @IsOptional()
  shift_2UnitId?: SbVehicle | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { SbEmployee as SbEmployee };
