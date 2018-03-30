import { Injectable } from '@angular/core';
import { WpNetworkService } from './wp-network.service';
import { Observable } from 'rxjs/Observable';
import { WpContext } from '../types/shared/WpContext';
import { WpRequestOptions } from '../types/WpRequestOptions';
import { WpPostStatus } from '../types/WpPostStatus';

@Injectable()
export class WpPostStatuses {
  constructor(private network: WpNetworkService) {}

  public getList(
    args: { context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostStatus[]> {
    return this.network.get('status', args, options);
  }

  public get(
    args: { status: string; context?: WpContext },
    options?: WpRequestOptions
  ): Observable<WpPostStatus> {
    const httpArgs = this.network.filter(args, ['status']);
    return this.network.get('status/' + args.status, httpArgs, options);
  }

}
