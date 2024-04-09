"use client";

import { type Editor } from "@tiptap/react";
import { Toggle } from "./ui/toggle";
import { Bold, Code, Heading1, Heading2, Italic, List, ListOrdered, Pilcrow, Strikethrough,Quote, Minus,Code2Icon, WrapText, RemoveFormatting, Undo, Redo, Tally1, Pen } from "lucide-react";


type Props = {
  editor: Editor | null;
};

export function ToolBar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  // const handleColorChange = (color) => {
  //   editor.chain().focus().setColor(color.hex).run();
  // };

  return (
    <div className="border border-input bg-neutral-950 rounded-md ">
      <Toggle
        size="default"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic color="white" className="h-4 w-4 " />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("code")}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
      >
        <Code size={35} color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("HighLight")}
        onPressedChange={() =>
          editor.chain().focus().toggleHighlight({ color: "#FAF594" }).run()
        }
      >
        <Pen size={35} color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("heading1", { level: 1 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
      >
        <Heading1 size={35} color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("heading2", { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 size={35} color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("para")}
        onPressedChange={() => editor.chain().focus().setParagraph().run()}
      >
        <Pilcrow color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("codeBlock")}
        onPressedChange={() => editor.chain().focus().setCodeBlock().run()}
      >
        <Code2Icon color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("seprator")}
        onPressedChange={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <Minus color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("heardbreak")}
        onPressedChange={() => editor.chain().focus().setHardBreak().run()}
      >
        <WrapText color="white" className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="default"
        pressed={editor.isActive("clear_format")}
        onPressedChange={() =>
          editor.chain().focus().clearNodes().unsetAllMarks().run()
        }
      >
        <RemoveFormatting color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("undo")}
        onPressedChange={() => editor.chain().focus().undo().run()}
      >
        <Undo color="white" className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="default"
        pressed={editor.isActive("redo")}
        onPressedChange={() => editor.chain().focus().redo().run()}
      >
        <Redo color="white" className="h-4 w-4" />
      </Toggle>
      {/* <input
        type="color"
        onInput={(event: any) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color}
      />
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </button> */}
     
    </div>
  );
}
