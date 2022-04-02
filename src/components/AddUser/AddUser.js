import React from "react";

const AddUser = (props) => {
  return (
    <div>
      {props.showUserModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div class="max-w-2xl w-96 text-start mx-auto">
                    <form>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder="Name "
                          required
                        />
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder="Email "
                          required
                        />
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <input
                          type="email"
                          name="floating_email"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder="Phone "
                          required
                        />
                      </div>
                      <div class="relative z-0 mb-6 w-full group">
                        <select
                          name="currency"
                          id="currency"
                          class="block py-2.5 px-0 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        >
                          <option value="">Currency</option>
                          <option value="volvo">USD</option>
                          <option value="saab">BDT</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => props.setShowUserModal(false)}
                      >
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default AddUser;
