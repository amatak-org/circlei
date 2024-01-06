import { RamInfo, RamLoad } from '@panel/common';
import * as si from 'systeminformation';

export default {
  dynamic: async (): Promise<RamLoad> => {
    const memInfo = (await si.mem()).active;

    return memInfo;
  },
  static: async (): Promise<RamInfo> => {
    const [memInfo, memLayout] = await Promise.all([si.mem(), si.memLayout()]);

    return {
      size: memInfo.total,
      layout: memLayout.map(({ manufacturer, type, clockSpeed }) => ({
        brand: manufacturer,
        type: type,
        frequency: clockSpeed ?? undefined,
      })),
    };
  },
};
