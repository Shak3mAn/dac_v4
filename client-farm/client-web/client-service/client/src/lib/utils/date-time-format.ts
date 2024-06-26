import { format } from 'date-fns';

export const formatDateTime = (date: Date): string => {
    if (!date) {
        return '';
    }
    
    return format(date, "EEEE, MMMM d, yyyy 'at' h:mm a");
};

export const formatDate = (date: Date): string => {
    if (!date) {
        return '';
    }
    
    return format(date, "EEEE, MMMM d, yyyy");
};