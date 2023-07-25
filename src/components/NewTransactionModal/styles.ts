import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";


export const Overlay = styled(Dialog.Overlay)`
position: fixed;
width: 100vw;
height: 100vw;
inset: 0;
background: rgba(0,0,0,0.75);

`;
export const Content = styled(Dialog.Content)`

`;
