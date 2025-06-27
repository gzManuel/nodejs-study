/**
 * Why is it important to use Path?
 *  1. Cross-platform safety: Always uses / or \ correctly on Windows vs POSIX.
 *  2. Convenience: Joins, normalizes, parses, and resolves file paths.
 *  3. Avoid string concatenation: Prevent subtle bugs around trailing or missing separators.
 */

import { fileURLToPath } from 'url';
import path from 'path'

// Concatenate different strings to create a path
export const joinExample = () =>{
    // __dirname or __filename it's not available in es module 
    // const helloTextDir = path.join(__dirname,'../utils','/helloText.txt')
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const helloTextDir = path.join(__dirname,'../utils','/helloText.txt')
    console.log("Joined the directory: "+helloTextDir)
}
// Concatenates different strings starting with the CWD (current working directory)
export const resolveExample = ()=>{
    const dataFileDir = path.resolve('src','utils','helloText.txt')
    console.log("Resolved the directory:"+ dataFileDir);
}

// Returns the last portion of a path
export const baseNameExample = () =>{
    console.log(path.basename('../utils/helloText.txt'))
    console.log(path.basename('../utils/helloText.txt','.txt'))
}

// Returns the directory portion of a path.
export const dirnameExample = () =>{
    const file = '/home/bob/images/photo.png';
    const dir  = path.dirname(file);
    console.log(dir);
    // → '/home/bob/images'
}

// What it does: Returns the file extension (including leading .).
export const extnameExample =()=>{
    console.log(path.extname('report.pdf'));  // → '.pdf'
    console.log(path.extname('archive.tar.gz')); // → '.gz'
}

// Splits a path into its components as an object:
export const parseExample =()=>{
    const parsed = path.parse('/usr/local/bin/npm');
    console.log(parsed);
    /*
    {
    root: '/',
    dir: '/usr/local/bin',
    base: 'npm',
    ext: '',
    name: 'npm'
    }
    */
}

// Reassembles a parsed object back into a path:
export const formatExample = ()=>{
    const obj = { dir: '/tmp', base: 'output.txt' };
    console.log(path.format(obj));
    // → '/tmp/output.txt'

}

// Gives the relative path you’d need to take from one location to another:
export const relativeExample = ()=>{
    console.log(path.relative('/data/reports', '/data/logs/2025'));
    // → '../logs/2025'
}

// Cleans up .., ., and repeated separators:
export const normalizeExample = ()=>{
    console.log(path.normalize('/foo/bar//baz/../quux/.'));
// → '/foo/bar/quux'
}

// check if the path its absolute:
export const isAbsoluteExample = ()=>{
    path.isAbsolute('/etc/passwd');  // true
    path.isAbsolute('etc/passwd');   // false
}

export const separatorAndDelimiter = () =>{
    console.log(path.sep);        // '/' on POSIX, '\\' on Windows
    console.log(path.delimiter);  // ':' on POSIX, ';' on Windows
}