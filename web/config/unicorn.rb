working_directory "/ircsems/deployment/web"
pid "/ircsems/deployment/web/tmp/pids/unicorn.pid"
stderr_path "/ircsems/deployment/web/log/unicorn.log"
stdout_path "/ircsems/deployment/web/log/unicorn.log"

listen "/tmp/unicorn.web.ircsems.sock"
worker_processes 2
timeout 30
