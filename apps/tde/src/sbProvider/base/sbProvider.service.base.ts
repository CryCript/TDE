/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  SbProvider as PrismaSbProvider,
  SbVehicle as PrismaSbVehicle,
} from "@prisma/client";

export class SbProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SbProviderCountArgs, "select">
  ): Promise<number> {
    return this.prisma.sbProvider.count(args);
  }

  async sbProviders<T extends Prisma.SbProviderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbProviderFindManyArgs>
  ): Promise<PrismaSbProvider[]> {
    return this.prisma.sbProvider.findMany<Prisma.SbProviderFindManyArgs>(args);
  }
  async sbProvider<T extends Prisma.SbProviderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbProviderFindUniqueArgs>
  ): Promise<PrismaSbProvider | null> {
    return this.prisma.sbProvider.findUnique(args);
  }
  async createSbProvider<T extends Prisma.SbProviderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbProviderCreateArgs>
  ): Promise<PrismaSbProvider> {
    return this.prisma.sbProvider.create<T>(args);
  }
  async updateSbProvider<T extends Prisma.SbProviderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbProviderUpdateArgs>
  ): Promise<PrismaSbProvider> {
    return this.prisma.sbProvider.update<T>(args);
  }
  async deleteSbProvider<T extends Prisma.SbProviderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbProviderDeleteArgs>
  ): Promise<PrismaSbProvider> {
    return this.prisma.sbProvider.delete(args);
  }

  async findSbVehicles(
    parentId: string,
    args: Prisma.SbVehicleFindManyArgs
  ): Promise<PrismaSbVehicle[]> {
    return this.prisma.sbProvider
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sbVehicles(args);
  }
}
