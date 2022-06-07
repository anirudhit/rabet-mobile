import config from 'config';
import store from 'store';

export default (account: string) => {
  const { options } = store.getState();

  if (options.network === 'MAINNET') {
    if (options.explorer === 'steexp') {
      return `${config.STEEXP.mainnet}/account/${account}`;
    }

    if (options.explorer === 'stellarexpert') {
      return `${config.STELLAR_EXPERT.mainnet}/account/${account}`;
    }

    if (options.explorer === 'lumenscan') {
      return `${config.LUMENSCAN.mainnet}/account/${account}`;
    }
  } else {
    if (options.explorer === 'steexp') {
      return `${config.STEEXP.testnet}/account/${account}`;
    }

    if (options.explorer === 'stellarexpert') {
      return `${config.STELLAR_EXPERT.testnet}/account/${account}`;
    }

    if (options.explorer === 'lumenscan') {
      return `${config.LUMENSCAN.testnet}/account/${account}`;
    }
  }

  return `${config.STEEXP.mainnet}/tx/${account}`;
};
