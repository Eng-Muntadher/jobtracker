import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { getCurrentTime } from "../helpers";

export interface NewMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}

interface MessagesState {
  messages: NewMessage[];
  initialAiMessageTime: string;
}

const initialState: MessagesState = {
  messages: [],
  initialAiMessageTime: getCurrentTime(),
  /* the above state is read only and indicates
   the time of the first ai placeholder message that is always present */
};

const AiChatSlice = createSlice({
  name: "AiChatMessages",
  initialState,
  reducers: {
    setAiChat: (state, action: PayloadAction<NewMessage[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { setAiChat } = AiChatSlice.actions;
export default AiChatSlice.reducer;
