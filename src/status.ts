export interface ElrondStatus{
    details: {
        erd_app_version: string,
        erd_chain_id: string,
        erd_connected_nodes: number,
        erd_consensus_round_state: string,
        erd_consensus_state: string,
        erd_count_accepted_blocks: number,
        erd_count_consensus: number,
        erd_count_consensus_accepted_blocks: number,
        erd_count_leader: number,
        erd_cpu_load_percent: number,
        erd_current_block_hash: string,
        erd_current_block_size: number,
        erd_current_round: number,
        erd_current_round_timestamp: number,
        erd_epoch_number: number,
        erd_fork_choice_count: number,
        erd_highest_notarized_block_by_metachain_for_current_shard: number,
        erd_is_syncing: number,
        erd_latest_tag_software_version: string,
        erd_live_validator_nodes: number,
        erd_mem_load_percent: number,
        erd_mem_total: number,
        erd_mem_used_golang: number,
        erd_mem_used_sys: number,
        erd_metric_consensus_group_size: number,
        erd_metric_cross_check_block_height: string,
        erd_metric_denomination_coefficient: string,
        erd_metric_leader_percentage: string,
        erd_metric_num_validators: number,
        erd_min_gas_price: number,
        erd_mini_blocks_size: number,
        erd_network_recv_bps: number,
        erd_network_recv_bps_peak: number,
        erd_network_recv_percent: number,
        erd_network_sent_bps: number,
        erd_network_sent_bps_peak: number,
        erd_network_sent_percent: number,
        erd_node_display_name: string,
        erd_node_type: string,
        erd_nonce: number,
        erd_num_connected_peers: number,
        erd_num_mini_blocks: number,
        erd_num_shard_headers_from_pool: number,
        erd_num_shard_headers_processed: number,
        erd_num_transactions_processed: number,
        erd_num_tx_block: number,
        erd_peer_type: string,
        erd_probable_highest_nonce: number,
        erd_public_key_block_sign: string,
        erd_round_at_epoch_start: number,
        erd_round_time: number,
        erd_rounds_passed_in_current_epoch: number,
        erd_rounds_per_epoch: number,
        erd_shard_id: number,
        erd_synchronized_round: number,
        erd_tx_pool_load: number
    }
}