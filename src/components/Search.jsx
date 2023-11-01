import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navi = useNavigate();
    const [show, setShow] = useState(false);
    const [param, setParam] = useState('');

    const handleSearch = () => {
        if (param.trim() !== '') {
            navi(`/search/${encodeURIComponent(param)}`);

        } else {
            navi('/');
            setParam('')
        }
    };

    return (
        <>
            <div className="flex items-center">
                <button onClick={() => setShow(!show)} className={`${show ? 'hidden' : ''}`}>
                    <LuSearch className="text-white font-semibold text-xl" />
                </button>
                <div className={show ? '' : 'hidden'}>
                    <input
                        type="text"
                        className="w-40 bg-4 text-white focus:outline-white placeholder:text-gray-200 placeholder-opacity-70"
                        onBlur={() => setShow(false)}
                        placeholder="movie, series"
                        onChange={(e) => setParam(e.target.value)}
                        value={param}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                </div>
                
            </div>
        </>
    );
};

export default Search;
