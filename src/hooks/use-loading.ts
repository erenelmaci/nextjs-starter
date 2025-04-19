import { useDispatch } from 'react-redux';
import { startLoading, stopLoading } from '@/redux/slices/loading-slice';

export function useLoading() {
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch(startLoading());
  };

  const hideLoading = () => {
    dispatch(stopLoading());
  };

  return {
    showLoading,
    hideLoading,
  };
}
