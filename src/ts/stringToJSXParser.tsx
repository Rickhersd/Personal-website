'use client'

import parse from "node-html-parser/dist/parse";
import React, { DOMAttributes, DOMElement } from "react";

function getNodesFromString(string:string){
  const root = parse(string)
  console.log(root)
  console.log(typeof(root))
  return new DOMParser().parseFromString(string, "text/html").body.children;
};

function createJSXElement(nodeArray:HTMLCollection){
  return ([...nodeArray].map((node, index):string | DOMElement<DOMAttributes<Element>, Element> | null => {
    const {
      attributes,
      localName,
      childNodes,
      children,
      nodeValue
    } = node;

    let obj = setAttribute(attributes)

    return localName ?
      React.createElement(
        localName,
        {key: index, ...obj},
        childNodes && Array.isArray(Array.from(childNodes)) ?
        createJSXElement(children) :
        []
      ) :
      nodeValue;
  })) 
;}

function setAttribute(attributes:NamedNodeMap | null){
  if (!(attributes as NamedNodeMap)) return;

  const attributeObj:{[key: string]: any} = {};
  Array.from(attributes as NamedNodeMap).forEach(attribute => {
    attributeObj[attribute.name] = (attribute.name === "style")?
      setAttrContentForStyle(attribute)
      :
      attribute.nodeValue as string;
  });

  return attributeObj;
}

function setAttrContentForStyle(attribute:Attr){
  const styleAttributes = attribute.nodeValue?.split(";");
  const styleObj:{[key: string]: string} = {};

  styleAttributes?.forEach(attribute => {
    let [key, value] = attribute.split(":");
    styleObj[key] = value;
  });

  return styleObj
}

export default function StringToJSX({domString, className}:{domString:string, className:string}){
  const nodes = getNodesFromString(domString)
  return <div className={className}>{createJSXElement(nodes)}</div>;
};