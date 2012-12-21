#include <iostream>
#include <string>
#include <fstream>

using namespace std;

void config_change(int);
void database_change(int);

int main(){
	int selection;

	// MENU
	cout <<"\n\tThis program is to change the configuration files for uploading php to a server or working locally.";
	cout << "\n\t\t1.)--Configure files for online.";
	cout << "\n\t\t2.)--Configure files for local editing.";
	cout << endl <<"\t\t";
	cin >> selection;
	
	config_change(selection);
	// database_change(selection);
	cout <<"\n\tThanks. Files changed";
	cout << endl;
	return 0;
}

void database_change(int selection){

	string username, password, database, file_name;
	ofstream output;
	
	file_name = "application/config/database.php";
	
	if(selection==1)
		{
			username = "templeo7_user";
			password = "Moeller12Moeller12";
			database = "templeo7_temple_immersive";
		}
	else//local editing
		{
			username = "root";
			password = "root";
			database = "temple_immersive";
		}
		output.open(file_name.c_str());
	
		output << "<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');\n";
		output << endl << endl;
		output << "$active_group = 'default';\n";
		output << "$active_record = TRUE;\n";
		output << "$db['default']['hostname'] = 'localhost';\n";
		output << "$db['default']['username'] = '" << username << "';\n";
		output << "$db['default']['password'] = '" << password <<"';\n";
		output << "$db['default']['database'] = '" << database << "';\n";
		output << "$db['default']['dbdriver'] = 'mysql';\n";
		output << "$db['default']['dbprefix'] = '';\n";
		output << "$db['default']['pconnect'] = TRUE;\n";
		output << "$db['default']['db_debug'] = TRUE;\n";
		output << "$db['default']['cache_on'] = FALSE;\n";
		output << "$db['default']['cachedir'] = '';\n";
		
		output << "$db['default']['char_set'] = 'utf8';\n";
		output << "$db['default']['dbcollat'] = 'utf8_general_ci';\n";
		output << "$db['default']['swap_pre'] = '';\n";
		output << "$db['default']['autoinit'] = TRUE;\n";
		output << "$db['default']['stricton'] = FALSE;\n";
					
		output.close();
}

void config_change(int selection){

	// VARIABLE SECTION
	string url, file_name;
	ofstream output;
	
	if(selection == 1)//online
		url = "http://www.cloudroomdesign.com/";
	else
		url = "http://localhost:8888/cloudroom_site/current";

	file_name = "application/config/config.php";
	output.open(file_name.c_str());
	
	output << "<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');\n\n";
	output << "$config['base_url'] = '" << url << "';\n";
	output << "$config['index_page'] = 'index.php';\n";
	output << "$config['uri_protocol'] = 'AUTO';\n";
	output << "$config['url_suffix'] = '';\n";
	output << "$config['language']	= 'english';\n";
	output << "$config['charset'] = 'UTF-8';\n";
	output << "$config['enable_hooks'] = FALSE;\n";
	output << "$config['subclass_prefix'] = 'MY_';\n";
	output << "$config['permitted_uri_chars'] = 'a-z 0-9~%.:_\\-';\n";
	output << "$config['allow_get_array'] = TRUE;\n";
	output << "$config['enable_query_strings'] = FALSE;\n";
	output << "$config['controller_trigger'] = 'c';\n";
	output << "$config['function_trigger'] = 'm';\n";
	output << "$config['directory_trigger']	= 'd';\n";
	output << "$config['log_threshold'] = 0;\n";
	output << "$config['log_path'] = '';\n";
	output << "$config['log_date_format'] = 'Y-m-d H:i:s';\n";
	output << "$config['cache_path'] = '';\n";
	output << "$config['encryption_key'] = 'Moeller12';\n";
	output << "$config['sess_cookie_name'] = 'ci_session';\n";
	output << "$config['sess_expiration'] = 7200;\n";
	output << "$config['sess_expire_on_close'] = FALSE;\n";
	output << "$config['sess_encrypt_cookie'] = FALSE;\n";
	output << "$config['sess_use_database']	= FALSE;\n";
	output << "$config['sess_table_name'] = 'ci_sessions';\n";
	output << "$config['sess_match_ip'] = FALSE;\n";
	output << "$config['sess_match_useragent'] = TRUE;\n";
	output << "$config['sess_time_to_update'] = 300;\n";
	output << "$config['cookie_prefix']	= \"\";\n";
	output << "$config['cookie_domain']	= \"\";\n";
	output << "$config['cookie_path'] = \"/\";\n";
	output << "$config['cookie_secure']	= FALSE;\n";
	output << "$config['global_xss_filtering'] = FALSE;\n";
	output << "$config['csrf_protection'] = FALSE;\n";
	output << "$config['csrf_token_name'] = 'csrf_test_name';\n";
	output << "$config['csrf_cookie_name'] = 'csrf_cookie_name';\n";
	output << "$config['csrf_expire'] = 7200;\n";
	output << "$config['compress_output'] = FALSE;\n";
	output << "$config['time_reference'] = 'local';\n";
	output << "$config['rewrite_short_tags'] = FALSE;\n";
	output << "$config['proxy_ips'] = '';\n";

	output.close();
}

