import { RootTabParamList } from './routes/types';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList { }
    }
}