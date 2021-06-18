import React from 'react'
import Card from './cards'

const Main = () => {
  return (
    <main>
      <div className='grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400'>    
        <div className='grid grid-cols-12 gap-6'>
          <div className='grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9'>
            <Card />
            <div className='col-span-12 mt-5'>
              <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
                <div className='bg-white shadow-lg p-4' id='chartline'></div>
                <div className='bg-white shadow-lg' id='chartpie'></div>
              </div>
            </div>
            <div className='col-span-12 mt-5'>
              <div className='grid gap-2 grid-cols-1 lg:grid-cols-1'>
                <div className='bg-white p-4 shadow-lg rounded-lg'>
                  <h1 className='font-bold text-base'>Table</h1>
                  <div className='mt-4'>
                    <div className='flex flex-col'>
                      <div className='-my-2 overflow-x-auto'>
                        <div className='py-2 align-middle inline-block min-w-full'>
                          <div
                            className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white'>
                            <table className='min-w-full divide-y divide-gray-200'>
                              <thead>
                                <tr>
                                  <th
                                      className='px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    <div className='flex cursor-pointer'>
                                      <span className='mr-2'>PRODUCT NAME</span>
                                    </div>
                                  </th>
                                  <th
                                      className='px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    <div className='flex cursor-pointer'>
                                      <span className='mr-2'>Stock</span>
                                    </div>
                                  </th>
                                  <th
                                    className='px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    <div className='flex cursor-pointer'>
                                      <span className='mr-2'>STATUS</span>
                                    </div>
                                  </th>
                                  <th
                                    className='px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    <div className='flex cursor-pointer'>
                                      <span className='mr-2'>ACTION</span>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='bg-white divide-y divide-gray-200'>
                                <tr>
                                  <td
                                    className='px-6 py-4 whitespace-no-wrap text-sm leading-5'>
                                    <p>Apple MacBook Pro 13</p>
                                    <p className='text-xs text-gray-400'>PC & Laptop</p>
                                  </td>
                                  <td
                                    className='px-6 py-4 whitespace-no-wrap text-sm leading-5'>
                                    <p>77</p>
                                  </td>
                                  <td
                                    className='px-6 py-4 whitespace-no-wrap text-sm leading-5'>
                                    <div className='flex text-green-500'>
                                      <svg xmlns='http://www.w3.org/2000/svg'
                                        className='w-5 h-5 mr-1' fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                        <path strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='2'
                                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                      </svg>
                                      <p>Active</p>
                                    </div>
                                  </td>
                                  <td
                                    className='px-6 py-4 whitespace-no-wrap text-sm leading-5'>
                                    <div className='flex space-x-4'>
                                      <a href='#' className='text-blue-500 hover:text-blue-600'>
                                        <svg xmlns='http://www.w3.org/2000/svg'
                                          className='w-5 h-5 mr-1'
                                          fill='none' viewBox='0 0 24 24'
                                          stroke='currentColor'>
                                          <path strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                        </svg>
                                        <p>Edit</p>
                                      </a>
                                      <a href='#' className='text-red-500 hover:text-red-600'>
                                        <svg xmlns='http://www.w3.org/2000/svg'
                                          className='w-5 h-5 mr-1 ml-3'
                                          fill='none' viewBox='0 0 24 24'
                                          stroke='currentColor'>
                                          <path strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                                        </svg>
                                        <p>Delete</p>
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main