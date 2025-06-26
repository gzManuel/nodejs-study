/**
 * Why is it important to use Path?
 *  1. Cross-platform safety: Always uses / or \ correctly on Windows vs POSIX.
 *  2. Convenience: Joins, normalizes, parses, and resolves file paths.
 *  3. Avoid string concatenation: Prevent subtle bugs around trailing or missing separators.
 */

import { fileURLToPath } from 'url';
import path from 'path'

export const joinExample = () =>{
    // __dirname or __filename it's not available in es module 
    // const helloTextDir = path.join(__dirname,'../utils','/helloText.txt')
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const helloTextDir = path.join(__dirname,'../utils','/helloText.txt')
    console.log("Joined the directory: "+helloTextDir)
}
// Warning: resolve returns a CWD 
export const resolveExample = ()=>{
    const dataFileDir = path.resolve('src','utils','helloText.txt')
    console.log("Resolved the directory:"+ dataFileDir);
}

export const baseNameExample = () =>{
    console.log(path.basename('../utils/helloText.txt'))
    console.log(path.basename('../utils/helloText.txt','.txt'))
}