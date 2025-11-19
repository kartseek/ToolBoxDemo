import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '317812fd83517210f9f53eefeeaad3b7': {
                        table: 'sys_ui_section'
                        id: '317812fd83517210f9f53eefeeaad3b7'
                    }
                    '317812fd83517210f9f53eefeeaad3bd': {
                        table: 'sys_ui_element'
                        id: '317812fd83517210f9f53eefeeaad3bd'
                    }
                    '397812fd83517210f9f53eefeeaad3bd': {
                        table: 'sys_ui_element'
                        id: '397812fd83517210f9f53eefeeaad3bd'
                    }
                    '7c495e3183d17210f9f53eefeeaad3b1': {
                        table: 'sys_ui_element'
                        id: '7c495e3183d17210f9f53eefeeaad3b1'
                    }
                    '7d7812fd83517210f9f53eefeeaad3bb': {
                        table: 'sys_ui_element'
                        id: '7d7812fd83517210f9f53eefeeaad3bb'
                    }
                    b57856b983917210f9f53eefeeaad32f: {
                        table: 'sys_ui_element'
                        id: 'b57856b983917210f9f53eefeeaad32f'
                    }
                    bd7856b983917210f9f53eefeeaad32e: {
                        table: 'sys_ui_element'
                        id: 'bd7856b983917210f9f53eefeeaad32e'
                    }
                    bd7856b983917210f9f53eefeeaad32f: {
                        table: 'sys_ui_element'
                        id: 'bd7856b983917210f9f53eefeeaad32f'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'c8de46a8b1864295a47dffb9a520d074'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '192fdd1a185c4518b87744268af54f4f'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'e0f94bcdd5f646dc9bc497f85314499f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1415bd0f0160425096f19a1df072c95d'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: '4587d4a7c5e94b7b90963e6cbfbb3f6d'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '141bea181c954af6b3f67b92c2ff9eea'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'state'
                            value: 'ready'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '142fad5519a24235b5e51aeff45c4b7c'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aead51a9cd144bfaa76a82ac9df41be'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'deadline'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d8ac6766ae14961ae7cfcd4ce1d7098'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '42c36d4b93814eb0b4e9646d1eb4e33a'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '461c381f87a44ddcb2f11b1efcb1d73d'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d865f7209b6438f9b55178d6761e5a3'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82c86a7dce4041c4b30ff08624f9aa07'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'state'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a5d9a1ffb6a491b9742fc076afdd28d'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'state'
                            value: 'inProgress'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9609d6fd83917210f9f53eefeeaad3c4'
                        deleted: true
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'feedback'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec3b39d80e994de09b9b7409df3b33a1'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3a33a28e78f4f60ba919d167eeea7dc'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'deadline'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd91878ab0014624852d2c648b6d48a4'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                            element: 'task'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'febedebd50124d6a8ff97c70324e71a9'
                        key: {
                            name: 'x_snc_toolboxdemo_todotable'
                        }
                    },
                ]
            }
        }
    }
}
