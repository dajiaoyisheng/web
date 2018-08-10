import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { PrisonersData } from './data/prisoners';
import { pieData } from './data/pie';
import { barData } from './data/bar';
import { pPostionData } from './data/pposition';
import { pPTableData } from './data/pptabledata';

export default {
    /**
     * mock bootstrap
     */
    bootstrap() {
        let mock = new MockAdapter(axios);
        let defaultResData = function() {
            return {
                status: 0,
                statusinfo: "操作成功",
                data: {}
            };
        }();

        mock.onGet('/getPrisonersData').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data.data = PrisonersData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });

        mock.onGet('/getBenchChartPie').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data = pieData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });

        mock.onGet('/getBenchChartbarData').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data = barData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });

        mock.onGet('/prisonersStutas').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data.data = PrisonersData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });

        mock.onGet('/pPositionData').reply(config => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data = pPostionData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });

        mock.onPost('/pPTableData').reply(config => {            
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    defaultResData.data = pPTableData;
                    resolve([200, defaultResData])
                }, 1000);
            });
        });
    }
}