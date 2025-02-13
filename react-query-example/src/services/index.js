import { supabase } from '../utils/supabase';

class ApiService {
    async getBooks() {
        const { data } = await supabase.from('Books').select();
        return data;
    }
    async createBook(book) {
        const { data } = await supabase.from('Books').insert([book]).select();
        return data;
    }
}

export default new ApiService();
