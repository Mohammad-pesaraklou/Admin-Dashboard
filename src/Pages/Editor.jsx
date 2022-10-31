import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
// data
import { EditorData } from '../data/dummy';
// component
import Header from '../Components/Header';


const Editor = () => {
    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Editor" />
            <RichTextEditorComponent>
                <EditorData />
                <Inject services={[Image, HtmlEditor, Toolbar, QuickToolbar, Link]} />
            </RichTextEditorComponent>
        </div>
    );
};

export default Editor;