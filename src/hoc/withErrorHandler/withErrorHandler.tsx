import { AxiosInstance } from 'axios';
import { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (
  WrapperComponent: any,
  axios: AxiosInstance
) => {
  return class extends Component<{}, { error: any }> {
    reqInterceptor: number;
    resInterceptor: number;

    state = {
      error: null as any,
    };

    constructor(props: any) {
      super(props);

      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });

        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <>
          <Modal
            show={!!this.state.error}
            onBackdropClick={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrapperComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
