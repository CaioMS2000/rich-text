import React, {Component, createRef, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './Editor.css';
import {Container, Top, IframeContainer, Iframe, basicTypeBold} from './styles/Editor';

import
{
    FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
    FaCut, FaCopy, FaIndent, FaOutdent, FaSubscript, FaSuperscript, FaUndoAlt, FaListUl, FaListOl, FaRedoAlt,
    FaParagraph, FaLink, FaUnlink, FaCode, FaImages, FaLinkedin
}
from "react-icons/fa";

let functional = true

const Header = (props) => {

    const {cmd} = props;
    return (
        <Top>
            <button onClick = {() => { cmd('bold') }} className="menu-iten"> <FaBold></FaBold> </button>
            <button onClick = {() => { cmd('italic') }} className="menu-iten"> <FaItalic></FaItalic> </button>
            <button onClick = {() => { cmd('underline') }} className="menu-iten"> <FaUnderline></FaUnderline> </button>
            <button onClick = {() => { cmd('strikeThrough') }} className="menu-iten"> <FaStrikethrough></FaStrikethrough> </button>
            <button onClick = {() => { cmd('justifyLeft') }} className="menu-iten"> <FaAlignLeft></FaAlignLeft> </button>
            <button onClick = {() => { cmd('justifyCenter') }} className="menu-iten"> <FaAlignCenter></FaAlignCenter> </button>
            <button onClick = {() => { cmd('justifyRight') }} className="menu-iten"> <FaAlignRight></FaAlignRight> </button>
            <button onClick = {() => { cmd('justifyFull') }} className="menu-iten"> <FaAlignJustify></FaAlignJustify> </button>
            <button onClick = {() => { cmd('cut') }} className="menu-iten"> <FaCut></FaCut> </button>
            <button onClick = {() => { cmd('copy') }} className="menu-iten"> <FaCopy></FaCopy> </button>
            <button onClick = {() => { cmd('indent') }} className="menu-iten"> <FaIndent></FaIndent> </button>
            <button onClick = {() => { cmd('outdent') }} className="menu-iten"> <FaOutdent></FaOutdent> </button>
            <button onClick = {() => { cmd('subscript') }} className="menu-iten"> <FaSubscript></FaSubscript> </button>
            <button onClick = {() => { cmd('superscript') }} className="menu-iten"> <FaSuperscript></FaSuperscript> </button>
            <button onClick = {() => { cmd('undo') }} className="menu-iten"> <FaUndoAlt></FaUndoAlt> </button>
            <button onClick = {() => { cmd('redo') }} className="menu-iten"> <FaRedoAlt></FaRedoAlt> </button>
            <button onClick = {() => { cmd('insertUnorderedList') }} className="menu-iten"> <FaListUl></FaListUl> </button>
            <button onClick = {() => { cmd('insertOrderedList') }} className="menu-iten"> <FaListOl></FaListOl> </button>
            <button onClick = {() => { cmd('insertParagraph') }} className="menu-iten"> <FaParagraph></FaParagraph> </button>
            <select onClick = {(e) => { cmd('formatBlock', `${e.target.value}`) }} className="menu-iten" name="H" style = {{fontSize: "13pt"}}>
                <option value="H1">H1</option>
                <option value="H2">H2</option>
                <option value="H3">H3</option>
                <option value="H4">H4</option>
                <option value="H5">H5</option>
                <option value="H6">H6</option>
            </select>
            <button onClick = { () => {cmd('insertHorizontalRule')} } className="menu-iten" style = {{fontSize: "13pt"}}>HR</button>
            <button onClick = { () => {cmd('createLink', 'link')} } className="menu-iten"> <FaLink></FaLink> </button>
            <button onClick = { () => {cmd('unlink')} } className="menu-iten"> <FaUnlink></FaUnlink> </button>
            <button onClick = { () => {cmd('', 'toggleSource')} } className="menu-iten"> <FaCode></FaCode> </button>
            <button onClick = { () => {cmd('', 'edit')} } className="menu-iten" style = {{fontSize: "13pt"}}>Edit</button>
            <div className="menu-iten">
                <label htmlFor="fontSize"
                style = {{marginRight: "1vw", fontSize: "13pt"}}>Font size</label>
                <input type="number" id="fontSize" style = {{width: "5vw", boxShadow: "0px 0px 4px black"}} onChange = {(e) => {cmd('fontSize', `${e.target.value}pt`)}}/>
            </div>
            <select onClick = { (e) => {cmd('fontName', `${e.target.value}`)} } className="menu-iten" name="fonts" style = {{fontSize: "13pt"}}>
                <option value="Arial">Arial</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Courier">Courier</option>
                <option value="Georgia">Georgia</option>
                <option value="Tahomas">Tahomas</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
            </select>
            <div className="color-selector menu-iten">Font: <input onChange = {(e) => { cmd('foreColor', `${e.target.value}`) }} type = "color"/></div>
            <div className="color-selector menu-iten">Background: <input onChange = {(e) => { cmd('hiliteColor', `${e.target.value}`) }} type = "color"/></div>
            <button onClick = { () => {cmd('insertImage', 'link')} } className="menu-iten"> <FaImages></FaImages> </button>
            <button onClick = { () => {cmd('selectAll')} } className="menu-iten" style = {{fontSize: "13pt"}}>Select all</button>
        </Top>
    );
}

const Contentt = React.forwardRef((props, ref) => {

    //const ifrm = useRef()

    const enableEditMode = () => {
        //console.log(ref.current.contentWindow.document)
        ref.current.contentWindow.document.designMode = "on"
    }
    
    const disableEditMode = () => {
        console.log(ref.current.contentWindow.document)
        ref.current.contentWindow.document.designMode = "off"
    }

    const cmd = (command, str) => {
        if(str == 'value'){
            ref.current.contentWindow.document.execCommand(command, false, null)
        }
        else{
            ref.current.contentWindow.document.execCommand(command, false, ref.current.contentWindow.document.documentElement.innerText)
        }
    };

    // mount and update
    // useEffect(() => {
    //     console.log("mounted or updated")
    // })

    // mounted
    useEffect(() => {
        console.log("mounted2", ref)
        enableEditMode()
    }, [])

    // updated
    // useEffect(() => {
    //     console.log("mounted", ifrm)
    // }, "array não vazio (variaveis)")
    
    // unmount
    // useEffect(() => {
    //     return () => {}
    // }, "array não vazio (variaveis)")
    
    return (
        <IframeContainer>
            <Iframe ref = {ref} ></Iframe>
        </IframeContainer>
    );
})

class Content extends Component {
    constructor(props) {
        super(props);
        this.myref = React.createRef();
    }

    enableEditMode = () => {
        console.log(this.myref.current.contentWindow.document)
        this.myref.current.contentWindow.document.designMode = "on"
    }
    
    disableEditMode = () => {
        console.log(this.myref.current.contentWindow.document)
        this.myref.current.contentWindow.document.designMode = "off"
    }

    cmd = (command) => {
        this.myref.current.contentWindow.document.execCommand(command, false, null)
    }

    componentDidMount(){
        this.enableEditMode()
    }

    render(){
        return (
            // <iframe title = "iframe" ref = { this.myref }></iframe>
            <Iframe ref = {this.myref}></Iframe>
        );
    }
}

const Editor = (props) => {

    const ifrm = useRef()
    let toggleSource = 0;

    const cmd = (command, str) => {
        if(str == 'value'){
            ifrm.current.contentWindow.document.execCommand(command, false, ifrm.current.contentWindow.document.documentElement.innerText)
        }
        else if(str == 'link'){
            ifrm.current.contentWindow.document.execCommand(command, false, prompt('Enter URL', ''))
        }
        else if(str == 'toggleSource'){
            /*if(toggleSource == 0){
                ifrm.current.contentWindow.document.documentElement.innerText = ifrm.current.contentWindow.document.documentElement.textContent;

                toggleSource = 1;
            }
            else{
                ifrm.current.contentWindow.document.documentElement.textContent = ifrm.current.contentWindow.document.documentElement.innerText;

                toggleSource = 0;
            }*/
            alert("ACHAR O BODY DENTRO DO OBJETO TÁ FODA")
        }
        else if(str == 'edit'){
            if(ifrm.current.contentWindow.document.designMode.toLowerCase() == 'off'){
                ifrm.current.contentWindow.document.designMode = "on"
            }
            else{
                ifrm.current.contentWindow.document.designMode = "off"
            }
        }
        else if(str != null){
            ifrm.current.contentWindow.document.execCommand(command, false, str)
        }
        else{            
            ifrm.current.contentWindow.document.execCommand(command, false, null)
        }
    };

    useEffect(() => {
        console.log("mounted1", ifrm)
    }, [])

    return (
        <Container>
            <Header cmd = {cmd}></Header>
            {functional? <Contentt ref = {ifrm}></Contentt>:<Content></Content>}
        </Container>
    );
}

export default Editor