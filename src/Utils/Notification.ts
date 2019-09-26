import { toast } from 'react-toastify';

class Notify {
	static success = toast.success;
	static error = toast.error;
	static warn = toast.warn;
	static info = toast.info;
}

export { Notify };
export default Notify;
