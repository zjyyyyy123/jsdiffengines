	@echo "# cc" $(<F) "(strings in flash + force-l32)"
	$(CC) $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -mforce-l32 $< -o $@.unmapped
	$(TOOLS_BIN)/xtensa-lx106-elf-objcopy --rename-section .rodata.str1.1=.irom0.str.1 $@.unmapped $@
