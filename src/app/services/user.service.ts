import { Injectable, Injector } from '@angular/core';

import {BaseDataService} from "../../framework/services/data.service";
import {User} from "../models/user.model";

@Injectable()
export class UserService extends BaseDataService<User>{

  constructor(injector : Injector) {
    super(injector);
  }

}
