# Set the working application directory
# working_directory "/path/to/your/app"

app_root "/ircsems/experiments/unicornexp-deploy"

working_directory app_root

# Unicorn PID file location
# pid "/path/to/pids/unicorn.pid"
pid "{app_root}/tmp/pids/unicorn.pid"

# Path to logs
# stderr_path "/path/to/log/unicorn.log"
# stdout_path "/path/to/log/unicorn.log"
stderr_path "{app_root}/log/unicorn.log"
stdout_path "{app_root}/log/unicorn.log"

# Unicorn socket
#listen "/tmp/unicorn.[app name].sock"
listen "/tmp/unicorn.ir.sock"

# Number of processes
# worker_processes 4
worker_processes 2

# Time-out
timeout 30
