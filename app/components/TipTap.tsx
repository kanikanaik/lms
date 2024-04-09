"use client";

import { Color } from "@tiptap/extension-color";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToolBar } from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import OrderedList from "@tiptap/extension-blockquote";
import ListItem from "@tiptap/extension-list-item";
import Highlight from "@tiptap/extension-highlight";
import CodeBlock from "@tiptap/extension-code-block";
import TextStyle from "@tiptap/extension-text-style";
import { Button } from "./ui/button";
import { addNotes } from "../utils/action";

export default function TipTap({
  title,
  description,
  onChange,
}: {
  title: string;
  description: string;
  onChange: (richText: string) => void;
}) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none ",
      },
      transformPastedText(text) {
        return text.toUpperCase();
      },
    },
    extensions: [
      StarterKit.configure({}),
      Color,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [1, 2],
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "my-custom-class",
          itemTypeName: "listItem",
        },
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: "my-custom-class",
          multicolor: true,
        },
      }),
      CodeBlock.configure({
        languageClassPrefix: "language-",
      }),
    ],
    content:
      '<h2 class="text-xl font-bold" levels="1,2">Practical 1 - Python Programming</h2><hr><p><strong><em>Python is a high-level, general-purpose programming language.Its DESIGN PHILOSOPHY EMPHASIZES CODE READABILITY WITH THE USE OF SIGNIFICANT INDENTATION.</em></strong></p><p><strong><em>Source Code - </em></strong></p><pre><code>print("hello world")</code></pre><p>Output - </p><p><code>hello world</code> </p>',

    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  const document_value = editor?.getHTML();
  return (
    <>
      <div className="border-2 rounded-md border-neutral-950">
        <ToolBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <form action={addNotes}>
        <input
          name="content"
          id="content"
          className="hidden"
          type="text"
          value={document_value}
        />
        <input
          name="title"
          id="title"
          className="hidden"
          type="text"
          value={title}
        />
        <Button className="mt-4" type="submit">
          Save
        </Button>
      </form>
    </>
  );
}
