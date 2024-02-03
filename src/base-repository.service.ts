import { Injectable } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
@Injectable()
export class BaseRespositoryService<T> {
  readonly baseRepository: Repository<T>;

  constructor(private entity: EntityTarget<T>, datasource: DataSource) {
    this.baseRepository = datasource.getRepository<T>(this.entity);
  }

  get find(): Repository<T>['find'] {
    return this.baseRepository.find.bind(this.baseRepository);
  }

  get findOne(): Repository<T>['findOne'] {
    return this.baseRepository.findOne.bind(this.baseRepository);
  }

  get findOneOrFail(): Repository<T>['findOneOrFail'] {
    return this.baseRepository.findOneOrFail.bind(this.baseRepository);
  }

  get createQueryBuilder(): Repository<T>['createQueryBuilder'] {
    return this.baseRepository.createQueryBuilder.bind(this.baseRepository);
  }

  get count(): Repository<T>['count'] {
    return this.baseRepository.count.bind(this.baseRepository);
  }

  get remove(): Repository<T>['remove'] {
    return this.baseRepository.remove.bind(this.baseRepository);
  }

  get update(): Repository<T>['update'] {
    return this.baseRepository.update.bind(this.baseRepository);
  }

  get save(): Repository<T>['save'] {
    return this.baseRepository.save.bind(this.baseRepository);
  }
}
