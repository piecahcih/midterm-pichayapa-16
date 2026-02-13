import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set)=>({
    todo: null,
    loading: false,
    error: null,
    setTodo: (state) =>  set({todo: state}),
    fetchTodo: async(userId)=>{
        set({loading: true, error: null});
        try {
            const res = await axios.get(`https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}`)
            set({todo: res.data, loading: false})
        } catch (error) {
            set({
                error: error.response?.data?.message || error.message || "Fetch failed", loading: false,
            })
            
        }
    },
    editTodo: async(userId, id, content, isdone)=>{
            set({loading: true, error: null});
            try {
                const res = await axios.patch(`https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}/${id}`,{content,isdone})
                set({loading: false})
            } catch (error) {
                set({
                    error: error.response?.data?.message || error.message || "Fetch failed", loading: false,
                })
                
            }
    },
    removeTodo:  async(userId, id)=>{
        console.log(userId, id)
            set({loading: true, error: null});
            try {
                const res = await axios.delete(`https://drive-accessible-pictures-send.trycloudflare.com/todos/${userId}/${id}`)
                set({loading: false})
            } catch (error) {
                set({
                    error: error.response?.data?.message || error.message || "Fetch failed", loading: false,
                })
                
            }
    },
    
})

)